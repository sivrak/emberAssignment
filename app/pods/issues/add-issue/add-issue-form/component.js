import Component from '@glimmer/component';
import {action} from '@ember/object';
import { service } from '@ember/service';

export default class AddIssueForm extends Component{
    severity = ["Minor", "Major", "Critical"];
    status = ["Open", "In Progress", "Closed"];
    desc = "";
    severitySelected = this.severity[0];
    statusSelected = this.status[0];
    @service store;

    @action
    setSeverity(severity){
        this.severitySelected = severity.target.value;
    }
    @action
    setStatus(status){
        this.statusSelected = status.target.value;
    }

    @action
    submit(){
        console.log(this.desc, this.severitySelected, this.statusSelected);
        let issue = this.store.createRecord('issue',{description:this.desc, severity: this.severitySelected, status:this.statusSelected});
        issue.save();
        history.back();
    }
}