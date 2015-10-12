# fletcher32.js

### [Demo for text input and files](http://gavr-pavel.github.io/fletcher32.js/)

## Usage
```javascript
var checksum = new Fletcher32();
checksum.append(data); // data should be an array of uint8 or uint16
checksum.append(someMoreData);
// ...
var hash = checksum.result().toString(16);
```
