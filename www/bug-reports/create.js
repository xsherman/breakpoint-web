import {Database} from 'database';

export class Create {
    constructor() {
			this.report = {}
		}
		
    submit() {
        var db = new Database();
				db.saveBugReport(this.report);
    } 
}