import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ordersRoutes } from './lib.routes';
import { OrderListComponent } from './order-list/order-list.component';
import { ModulesSharedUiComponent } from 'modules/shared/ui';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ordersRoutes), ModulesSharedUiComponent],
  declarations: [OrderListComponent],
})
export class OrdersModule {}
