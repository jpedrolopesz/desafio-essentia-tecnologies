import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideZard } from '@/shared/core/provider/providezard';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    
  
    provideZard(),]
};
