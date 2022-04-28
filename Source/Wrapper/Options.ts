
/**
 *  Opening Options
 *
 *  Customize the way the target is opened.
 */

export interface OpenOptions {
    
  /**
   * Specify the app to open the `target` with.
   * Optionally add arguments for the app.
   */
   
  with ?: string[];
  
  
  /**
   * Wait for the app to close.
   */
  
  wait ?: boolean;
}