import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import { MaterialModule } from '../material.module';
import { ClarityModule } from "@clr/angular";
import { TitleCasePipe } from './title-case.pipe';
import { TruncatePipe } from './truncate.pipe';
@NgModule({
    declarations: [SpinnerOverlayComponent, TitleCasePipe, TruncatePipe],
    imports: [CommonModule, ClarityModule, MaterialModule],
    exports: [SpinnerOverlayComponent, TitleCasePipe, TruncatePipe]
})
export class SharedModule {}
