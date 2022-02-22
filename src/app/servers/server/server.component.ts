import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // here + mark convert string id to number value
    /*const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);

    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );*/

    // use resolver for access server data
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server']; // this server param is equivalent to resolver variable name of routing array
      }
    );
  }

  onEdit() {
    // this queryParamsHandling will override previous query params
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
