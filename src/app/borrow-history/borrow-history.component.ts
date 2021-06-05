import { Component, OnInit } from '@angular/core';
import { BorrowerHistory } from '../borrow-history/borrow-history.service';

@Component({
  selector: 'app-borrow-history',
  templateUrl: './borrow-history.component.html',
  styleUrls: ['./borrow-history.component.scss']
})
export class BorrowHistoryComponent implements OnInit {
  borrwedObjectArray: any;
  clickedVal: any;
  borrowList: any;
  datas:any;
  difference_In_Days:any;
  diffDays:any;

  constructor(public BorrowerHistoryService: BorrowerHistory) {
    this.BorrowerHistoryService.getBorrowerList().subscribe((data: any) => {
        sessionStorage.setItem('borow',JSON.stringify(data));
    })
   }
  ngOnInit(): void { }

  ngAfterContentInit(): void {
    this.borrowList = sessionStorage.getItem('borow');
    console.log(this.borrowList)
    this.borrwedObjectArray = JSON.parse(this.borrowList)
    }
    return(i: any){
        this.clickedVal = [this.borrwedObjectArray[i]]
        this.clickedVal.map((data:any) => {
          this.datas = data
          var date1 = new Date(this.datas.returningDate);
          var date2 = new Date();
          var Difference_In_Time = date2.getTime() - date1.getTime();
          this.difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
          this.diffDays = parseInt(this.difference_In_Days)
          if(this.diffDays <= 0){
            data.dueAmount = 0
          }else if(this.diffDays <= 3){
            data.dueAmount = 20 * this.diffDays
          }else if(this.diffDays >= 3){
            data.dueAmount = 50 * this.diffDays
          }
          return data.status = 'RETURNED' , data.returnedDate = new Date() , data.dueAmount = data.dueAmount
        });
        var setVerfy = JSON.stringify(this.borrwedObjectArray)
        sessionStorage.setItem('borrow',setVerfy)
        alert('Book Returned Successfully!');
    }
}
