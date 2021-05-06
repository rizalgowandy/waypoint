import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import ApiService from 'waypoint/services/api';

export default class WorkspaceProjectsProjectApp extends Controller {
  @service api!: ApiService;

  @action
  runWaypointUp() {
    debugger;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'workspace/projects/project/app': WorkspaceProjectsProjectApp;
  }
}
