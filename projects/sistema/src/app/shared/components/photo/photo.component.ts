import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { environment } from 'projects/sistema/src/environments/environment';

@Component({
  selector: 'amb-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhotoComponent),
      multi: true
    }
  ]
})
export class PhotoComponent implements OnInit {

  @ViewChild("photo") photo: ElementRef;
  @ViewChild("file") file: ElementRef;
  @Input() photoByDefault: string;
  statusHover = false;
  triggerSnapshot = new Subject<void>();
  isUsingWebcam: boolean = false;
  onChange: any;
  onTouched: any;
  value!: File;


  constructor() { }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn
  }

  writeValue(val: File): void {
    if (val) {
      this.value = val;
    }
  }

  ngOnInit(): void {
  }

  fileDropped(file: File) {
    if (!file.type.startsWith('image/')) {
      return;
    }

    this.onChange(file);
    this.onTouched();

    const fr: FileReader = new FileReader();
    fr.readAsDataURL(file);
    fr.onloadend = (response: any) => {
      const dataBase64 = response.target.result;
      this.loadPhotoFromUrlOrDataURL(dataBase64);
    }

  }

  loadPhotoFromUrlOrDataURL(dataUrlOrPatg: string) {
    this.photo.nativeElement.style.backgroundImage = 'url(' + dataUrlOrPatg + ')';
  }

  executeLoadImage() {
    this.file.nativeElement.click();
  }

  selectImage(event: any) {
    const file = event.target.files[0];
    this.fileDropped(file)
  }

  triggerAsObservable(): Observable<void> {
    return this.triggerSnapshot.asObservable();
  }

  takePhoto() {
    this.triggerSnapshot.next();
  }

  imageCapture(event: WebcamImage) {
    fetch(event.imageAsDataUrl)
      .then((response) => response.arrayBuffer())
      .then((buffer) => new File([buffer], 'image-profile', { type: "image/jpeg", }))
      .then((file) => {
        this.isUsingWebcam = false;
        this.fileDropped(file);
      })
  }

  changeOriginPhoto(event: MatSlideToggleChange) {
    this.isUsingWebcam = !this.isUsingWebcam
  }

  ngAfterViewInit() {
    if (this.photoByDefault) {
      const path = `${environment.apiUrl}/photos/${this.photoByDefault}`
      this.loadPhotoFromUrlOrDataURL(path);
    }
  }
}
