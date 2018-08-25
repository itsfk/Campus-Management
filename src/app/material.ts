import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule, MatTabsModule],
  exports: [MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule, MatTabsModule]
})
export class MaterialModule {}
