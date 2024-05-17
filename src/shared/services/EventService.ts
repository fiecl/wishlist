import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs"; // THIS 'EventService.ts' FILE IS PART OF 4.1 Using Observables to Create an Event Bus

// Subject: We can issue a single event and multiple objects can be listening on that same event

@Injectable({
    providedIn: "root"
})
export class EventService {
    private subject = new Subject();

    emit(eventName: string, payload: any) {
        // debugger; // For debugging
        this.subject.next({eventName, payload});
    }

    listen(eventName: string, callback: (event: any) => void) {
        this.subject.asObservable().subscribe((nextObj: any) => {
            // debugger; // For debugging
            if (eventName === nextObj.eventName) {
                callback(nextObj.payload);
            }
        });
    };
}

// export default new EventService();

  