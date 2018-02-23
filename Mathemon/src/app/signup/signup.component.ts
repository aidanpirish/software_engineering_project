import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private signupForm: AngularFirestoreDocument<FormData>
  item:Observable<FormData>
  teacherCollectionReference;

  @Input()
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(private afs: AngularFirestore) { 
    this.teacherCollectionReference = this.afs.collection('Teachers');
  }
  
  ngOnInit() {
  }
  

  submitData():void {
    this.teacherCollectionReference.add({email:this.email,name: {first_name:this.firstName, last_name:this.lastName}, password:this.password});
  }

  click() {
    alert("clicked");
  }

}
