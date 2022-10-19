import styled from "styled-components";

export const TableBody = styled.tbody`
height: auto;
`

export const Table = styled.table`
height: auto;
width: 50%;
border: 1px solid blue;
text-align: center;`

export const TableHead = styled.thead`
padding: 15px;
text-transform: uppercase;`

export const RowName = styled.th`
background-color: palegoldenrod;`

export const RowData = styled.td`
padding: 5px;`

export const Row = styled.tr`
&:nth-child(2n) {
    background-color: paleturquoise};
font-size: 16px;
font-style: 500;`