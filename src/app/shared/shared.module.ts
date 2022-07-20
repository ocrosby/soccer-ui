import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import { MaterialModule } from '../material.module';
import { ClarityModule } from "@clr/angular";

@NgModule({
    declarations: [SpinnerOverlayComponent],
    imports: [CommonModule, ClarityModule, MaterialModule],
    exports: [SpinnerOverlayComponent]
})
export class SharedModule {}
