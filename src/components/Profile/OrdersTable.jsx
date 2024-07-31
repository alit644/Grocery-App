/* eslint-disable react/prop-types */
import {
  TableContainer,
  Table,
  Tr,
  Th,
  Thead,
  Tbody,
} from "@chakra-ui/react";

const OrdersTable = ({ TdTable }) => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Order ID</Th>
            <Th>User ID</Th>
            <Th>image</Th>
            <Th>Product Name</Th>
            <Th>Quantity</Th>
            <Th>Price</Th>
            <Th>order Time</Th>
          </Tr>
        </Thead>
        <Tbody>{TdTable}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
