import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BodyComponent } from './comercializacion/body/body.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';
import { OfertaComponent } from './comercializacion/oferta/oferta.component';
import { ProveedoresComponent } from './comercializacion/proveedores/proveedores.component';



export const routes: Routes = [
    {path: '', redirectTo:'comercializacion/body',pathMatch:'full'},
    {path: 'comercializacion/body', component: BodyComponent },


    {path: 'nosotros', component: NosotrosComponent},
    {path: 'login', component: LoginComponent },
    {path: 'comercializacion/oferta', component: OfertaComponent},
    {path: 'comercializacion/proveedores', component: ProveedoresComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
