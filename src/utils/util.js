export default {
  typeof(o) {
    var type = Object.prototype.toString.call(o);
    return type.slice(8, type.length - 1).toLocaleLowerCase();
  }
}