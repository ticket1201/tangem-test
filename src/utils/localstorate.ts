export const localStorage = {
  getSqrAlertState() {
    const string = window.localStorage.getItem('sqrAlertState');
    return string && JSON.parse(string);
  },
  setSqrAlertState(data: string) {
    window.localStorage.setItem('sqrAlertState', JSON.stringify(data));
  }
}