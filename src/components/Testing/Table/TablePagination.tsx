import { useState, useRef, useLayoutEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface TableType {
  id: number;
  name: string;
  description: string;
}

export interface TableProps {
  template: TableType[];
}

const TablePagination = ({ template }: TableProps) => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const pageCount = Math.ceil(template.length / pageSize);

  // Refs for measuring heights
  const containerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const [rowHeight, setRowHeight] = useState<number>(0);

  const updateRowHeight = () => {
    if (!containerRef.current || !tableRef.current) return;
    // Total available height for table (container fills flex-1)
    const totalHeight = containerRef.current.clientHeight;
    // Header (thead) height
    const theadEl = tableRef.current.querySelector("thead");
    const headerHeight = theadEl ? theadEl.clientHeight : 0;
    // Available height for tbody
    const bodyHeight = totalHeight - headerHeight;
    const newRowHeight = Math.floor(bodyHeight / pageSize);
    setRowHeight(newRowHeight);
  };

  // Update on mount and resize
  useLayoutEffect(() => {
    updateRowHeight();
    window.addEventListener("resize", updateRowHeight);
    return () => window.removeEventListener("resize", updateRowHeight);
  }, []);

  const currentData = template.slice((page - 1) * pageSize, page * pageSize);

  const goToPage = (n: number) => {
    if (n < 1 || n > pageCount) return;
    setPage(n);
  };
  const WINDOW_SIZE = 3; // quante pagine mostriamo per volta

  // prima di `return(...)`, calcola:
  const windowStart = Math.floor((page - 1) / WINDOW_SIZE) * WINDOW_SIZE + 1;
  const windowEnd = Math.min(windowStart + WINDOW_SIZE - 1, pageCount);

  // array delle pagine da renderizzare
  const visiblePages = [];
  for (let p = windowStart; p <= windowEnd; p++) {
    visiblePages.push(p);
  }

  // handlers per spostare la finestra
  const prevWindow = () => {
    if (windowStart > 1) {
      setPage(windowStart - 1);
    }
  };
  const nextWindow = () => {
    if (windowEnd < pageCount) {
      setPage(windowEnd + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4 flex-1 w-full p-8 overflow-hidden h-full">
      <p>tabella</p>
      <div ref={containerRef} className="flex-1 bg-amber-100">
        <Table ref={tableRef} className="w-full h-full">
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nome</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((item) => (
              <TableRow
                key={item.id}
                className="bg-amber-800"
                style={{ height: rowHeight }}
              >
                <TableCell className="font-medium pl-[24px]">
                  {item.id}
                </TableCell>
                <TableCell>{item.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-row items-center">
        <Pagination>
          <PaginationContent>
            {/* Previous page */}
            <PaginationItem>
              <PaginationPrevious onClick={() => goToPage(page - 1)}>
                Prev
              </PaginationPrevious>
            </PaginationItem>

            {/* Ellipsis per spostare la finestra indietro */}
            {windowStart > 1 && (
              <PaginationItem>
                <PaginationEllipsis onClick={prevWindow} />
              </PaginationItem>
            )}

            {/* Numeri di pagina visibili */}
            {visiblePages.map((num) => (
              <PaginationItem key={num}>
                <PaginationLink
                  onClick={() => goToPage(num)}
                  isActive={num === page}
                >
                  {num}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Ellipsis per spostare la finestra avanti */}
            {windowEnd < pageCount && (
              <PaginationItem>
                <PaginationEllipsis onClick={nextWindow} />
              </PaginationItem>
            )}

            {/* Next page */}
            <PaginationItem>
              <PaginationNext onClick={() => goToPage(page + 1)}>
                Next
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default TablePagination;
