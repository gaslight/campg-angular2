import {Component, provide, View, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import CandidateService from "./candidate_service";

import { ROUTER_DIRECTIVES, Router } from 'angular2/router';

@Component({
    selector: 'candidate-list'
})
@View({
  template: `
  <ul>
    <li *ng-for="#candidate of candidates"><a [router-link]="['/CandidateDetails', {'id':candidate.id}]">{{candidate.name}}</a></li>
  </ul>
  `,
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
class CandidatesComponent {
  constructor(candidateService: CandidateService, router: Router) {
    this.candidateService = candidateService;
    this.router = router;
    this.candidateService.getCandidates().subscribe( (candidates) => {
      this.candidates = candidates;
    });
    this.newCandidate = {};
  }
  addCandidate() {
    this.candidates.push(this.newCandidate);
    this.newCandidate = {};
  }
}

export default CandidatesComponent
