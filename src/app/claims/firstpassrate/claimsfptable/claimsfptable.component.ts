import {Component} from '@angular/core';

@Component({
    selector: 'cfptable-chart',
    templateUrl:'./claimsfptable.component.html',
    styleUrls: ['./claimsfptable.component.scss'],
})

export class ClaimsFPTableComponent {

    tableContents: any[] = [
{"claimsDate":"2017-07-25","totalRecipts":100,"xcClaims":24,"workFlow":24,"firstPass":12,"firstPassRate":12.0,"comments":"No Xommecbrs","updatedBy":"165162","lob":"Individual"},
{"claimsDate":"2017-07-25","totalRecipts":100,"xcClaims":24,"workFlow":24,"firstPass":12,"firstPassRate":12.0,"comments":"No Xommecbrs","updatedBy":"165162","lob":"LG"},
{"claimsDate":"2017-07-25","totalRecipts":100,"xcClaims":24,"workFlow":24,"firstPass":12,"firstPassRate":12.0,"comments":"No Xommecbrs","updatedBy":"165162","lob":"MedSupp"},
{"claimsDate":"2017-07-25","totalRecipts":100,"xcClaims":24,"workFlow":24,"firstPass":12,"firstPassRate":12.0,"comments":"No Xommecbrs","updatedBy":"165162","lob":"SG"}
] ;


}