export class Logger {
  public static curTimestamp() {
    return new Date().toLocaleString();
  }

  public static info(...args) {
    console.info("INFO:  ", this.curTimestamp(), ...args);
  }

  public static debug(...args) {
    console.debug("DEBUG: ", this.curTimestamp(), ...args);
  }

  public static error(...args) {
    console.error("ERROR: ", this.curTimestamp(), ...args);
  }
}
