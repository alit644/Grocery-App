import { Alert, AlertIcon, Box, Button, Image, Td, Tr } from "@chakra-ui/react";
import { useFetch } from "../../Hooks/useFetch";
import { useUser } from "../../Context/UserContext";
import OrdersTable from "./OrdersTable";
import jsPDF from "jspdf";
import "jspdf-autotable";
import MySkeleton from "../shared/skeleton/MySkeleton";

const Orders = () => {
  // get user id
  const { user } = useUser();
  // get all orders
  const { data, isLoading } = useFetch({
    queryKey: ["orders"],
    URL: `orders?userID=${user?.id}`,
  });

  if (isLoading)
    return <MySkeleton h={"164px"} w={{ base: "180px", md: "100%" }} />;

  // show Table Bode
  const TdTable = data?.data?.map((order) => {
    return order?.cart?.map((item) => {
      return (
        <Tr key={item.id}>
          <Td>{order?.id}</Td>
          <Td>{order?.userID}</Td>
          <Td>
            <Image w={"70px"} src={item.image} alt="order image" />
          </Td>
          <Td>{item.title}</Td>
          <Td>{item.quantity}</Td>
          <Td>{(item.price * item.quantity).toFixed(2)} </Td>
          <Td>{new Date(order?.orderTime).toLocaleTimeString()}</Td>
        </Tr>
      );
    });
  });

  // Generate PDF

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("User Orders", 20, 10);

    const tableColumn = [
      "Order ID",
      "User ID",
      "Title",
      "Quantity",
      "Total Price",
      "Order Time",
    ];
    const tableRows = [];

    data?.data?.forEach((order) => {
      order.cart.forEach((item) => {
        const orderData = [
          order.id,
          order.userID,
          item.title,
          item.quantity,
          (item.price * item.quantity).toFixed(2),
          new Date(order.orderTime).toLocaleTimeString(),
        ];
        tableRows.push(orderData);
      });
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      didDrawCell: (data) => {
        if (data.column.index === 2 && data.cell.section === "body") {
          const image = tableRows[data.row.index][2];
          if (image) {
            doc.addImage(
              image,
              "JPEG",
              data.cell.x + 2,
              data.cell.y + 2,
              16,
              16
            ); // Adjust the image size and position as needed
          }
        }
      },
    });

    doc.save("user_orders.pdf");
  };
  return (
    <Box>
      {data.data.length !== 0 ? (
        <>
          <OrdersTable TdTable={TdTable} />
          <Button mt={5} colorScheme="teal" onClick={downloadPDF}>
            Download as PDF
          </Button>
        </>
      ) : (
        <Alert status="info">
          <AlertIcon />
          No Orders Selected 
        </Alert>
      )}
    </Box>
  );
};

export default Orders;
