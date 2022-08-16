import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class Paginator extends MatPaginatorIntl {

  override itemsPerPageLabel = "Item por pagina"
  override nextPageLabel = "Siguiente Pagina"
  override previousPageLabel = "Pagina Anterior"
  override firstPageLabel = "Primera Pagina"
  override lastPageLabel = "Ultima Pagina"

  override  getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0 || pageSize === 0) {
      return '0 de ' + length
    }

    length = Math.max(length);
    const start = page * pageSize;
    const end = start < length ? Math.min(start + pageSize, length) : start + pageSize;

    return `${start + 1} - ${end} de ${length} `
  };

}
