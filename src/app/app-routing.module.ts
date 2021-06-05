import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrowHistoryComponent } from './borrow-history/borrow-history.component';

const routes: Routes = [
  { path: '', redirectTo: '/borrow-history', pathMatch: 'full' },
  { path: 'borrow-history', component: BorrowHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
