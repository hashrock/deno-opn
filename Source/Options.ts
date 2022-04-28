
/**
 *  Opening Options
 *
 *  Customize the way the target is opened.
 */

export interface OpnOptions {
    
  /**
   * Specify the app to open the `target` with.
   * Optionally add arguments for the app.
   */
   
  app?: string[];
  
  
  /**
   * Wait for the app to close.
   */
  
  wait?: boolean;
}