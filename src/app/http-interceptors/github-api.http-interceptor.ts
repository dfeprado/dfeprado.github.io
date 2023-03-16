import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable()
export class GithubApiHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.includes('github.com')) {
            req = req.clone({
                headers: req.headers.set('authorization', `Bearer ${environment.github.token}`)
            });
        }
        
        return next.handle(req);
    }

}