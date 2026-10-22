import { Layout } from "@/components/Layout";
import React from "react";
import { Table,TableCaption,TableHeader,TableHead,TableRow,TableBody,TableCell } from "@/components/ui/table";
export const Usuarios = () => {
  return (
    <Layout>
      <Table>
        <TableCaption>Lista de usuarios de prueba</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre Usuario</TableHead>
            <TableHead>Edad</TableHead>
            <TableHead>Cargo</TableHead>
            <TableHead>Antiguedad</TableHead>
            <TableHead>Activo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Pablo Eduardo</TableCell>
            <TableCell>27</TableCell>
            <TableCell>Enlace</TableCell>
            <TableCell>2 meses</TableCell>
            <TableCell>Activo</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Rebeca</TableCell>
            <TableCell>31</TableCell>
            <TableCell>Enlace</TableCell>
            <TableCell>12 meses</TableCell>
            <TableCell>Activo</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Luis David</TableCell>
            <TableCell>47</TableCell>
            <TableCell>Jefe</TableCell>
            <TableCell>10 años</TableCell>
            <TableCell>Activo</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Layout>
  );
};

export default Usuarios;
