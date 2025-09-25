"use client"

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useMemo, useState } from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"




export default function AthleteDataTable({ data, columns }) {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(20)

  const filteredData = useMemo(() => {
    const query = search.trim().toLowerCase()
    return data.filter((item) => {
      const matchesName = query
        ? `${item.firstName || ""} ${item.lastName || ""}`.toLowerCase().includes(query)
        : true
      return matchesName
    })
  }, [data, search, pageSize])

  // Pagination logic
  const pageCount = Math.ceil(filteredData.length / pageSize)
  const paginatedData = useMemo(() => {
    const start = page * pageSize
    return filteredData.slice(start, start + pageSize)
  }, [filteredData, page])


  if (page > 0 && page >= pageCount) {
    setPage(0)
  }

  const table = useReactTable({
    data: paginatedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className='my-4 h-full min-h-0 overflow-hidden flex flex-col'>
      <div className="flex items-center justify-end gap-2">
        <Input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setPage(0)
          }}
        />
      </div>
      <div className="overflow-y-auto mt-4">
        <Table className='font-mono'>
          <TableHeader className='sticky top-0 bg-background z-10'>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between mt-2 border-t p-2">
        <div className="text-sm text-muted-foreground font-mono">
          Page {pageCount === 0 ? 0 : page + 1} of {pageCount}
        </div>
        <div className="flex gap-2">
          <Select value={pageSize.toString()} onValueChange={(value) => setPageSize(parseInt(value))}>
            <SelectTrigger>
              <SelectValue placeholder="Rows per page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={page >= pageCount - 1 || pageCount === 0}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
