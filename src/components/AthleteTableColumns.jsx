"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"


export const columns = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return <div>{row.original.id}</div>
    }
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return <div>{row.original.firstName} {row.original.lastName}</div>
    }
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return <div>{row.original.email}</div>
    }
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => {
      return <div>{row.original.phone}</div>
    }
  },
  {
    accessorKey: "dateOfBirth",
    header: "Date of Birth",
    cell: ({ row }) => {
      return <div>{row.original.dateOfBirth}</div>
    }
  },
  {
    accessorKey: "lastTest",
    header: "Last Test",
    cell: ({ row }) => {
      return <div>{row.original.testRecords.map((test) => test.date).sort((a, b) => new Date(b) - new Date(a))[0]}</div>
    }
  },
  {
    accessorKey: "testRecords",
    header: ({ column }) => {
      return <div className="flex justify-end">Records</div>;
    },
    cell: ({ row }) => {
      return <div className="flex justify-end"><Link href={`/athletes/${row.original.id}`}><Button variant="outline">View</Button></Link></div>;
    }
  },


]

