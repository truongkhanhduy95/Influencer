export interface Command {
  /**
   * handle logic
   */
  handle(): Promise<any>;

  isRunning(): boolean;
}