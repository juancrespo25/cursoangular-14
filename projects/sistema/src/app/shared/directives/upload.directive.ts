import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
    selector: "[upload]"
})
export class UploadDirective {

    @Output() onHover: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onFileDropped: EventEmitter<File> = new EventEmitter<File>();

    @HostListener('dragover', ['$event']) onDragOver(event) {
        event.preventDefault();
        this.onHover.emit(true);
    }

    @HostListener('dragleave', ['$event']) onDragLeave(event) {
        event.preventDefault();
        this.onHover.emit(false);
    }

    @HostListener('drop', ['$event']) onDrop(event) {
        event.preventDefault();
        this.onHover.emit(false);
        const files = event.dataTransfer.files;

        if (files.length > 0) {
            const fileSelected: File = files[0]
            this.onFileDropped.emit(fileSelected);
        }
    }
}