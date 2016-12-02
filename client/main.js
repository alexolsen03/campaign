import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';

// components
import { name as Navigation } from '../imports/ui/components/navigation/navigation';
import { name as CampaignsList } from '../imports/ui/components/campaignsList/listCampaigns';

angular.module('campaign', [
    angularMeteor,
    uiRouter,
    'accounts.ui',
    Navigation,
    CampaignsList
]);