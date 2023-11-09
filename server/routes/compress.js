const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use(express.json());

router.post('/', (req, res) => {
  import('huffy')
    .then((module) => {
      const huffy = module;
      const receivedString="File content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis commodo erat. Suspendisse dictum massa eget ipsum interdum, at cursus velit cursus. Nulla facilisi. Maecenas id bibendum nisl. Cras eget nibh id dui eleifend venenatis. Nulla facilisi. Integer quis felis a arcu vulputate ultrices.      Nam ac mi eu massa ultricies mattis a sit amet ipsum. Vestibulum euismod ligula ac felis lacinia, non bibendum ipsum iaculis. Vivamus quis diam ac nulla efficitur faucibus. Ut eu mi tincidunt, interdum velit sit amet, lacinia purus. Nullam scelerisque, nulla a pellentesque varius, velit turpis viverra ipsum, sit amet aliquam felis nulla sit amet nulla. Duis sed libero vitae metus iaculis dapibus.      In hac habitasse platea dictumst. Quisque eget elementum velit, nec aliquam magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent blandit, massa ut consectetur consectetur, sapien erat tincidunt neque, quis ultricies justo elit vitae arcu. Donec sed felis risus. Vestibulum at dui a elit tincidunt accumsan. Nullam efficitur, eros vitae tincidunt ultricies, turpis ex venenatis quam, sit amet auctor nulla est quis turpis. Curabitur vulputate id nibh eu dignissim. Sed consectetur dolor id odio rhoncus, et dignissim ligula iaculis. Proin feugiat justo vitae mi gravida, a dictum justo fermentum.      Phasellus eget nisi ac metus tincidunt iaculis a vel purus. Nullam vitae sapien scelerisque, vulputate ipsum eu, malesuada purus. Donec rhoncus, dui nec vestibulum pharetra, nulla augue tincidunt est, non convallis ligula ipsum sit amet quam. Etiam accumsan tellus nec metus dapibus, eu bibendum elit posuere. Integer congue vehicula diam in condimentum. Ut a fringilla nulla. In hac habitasse platea dictumst. Suspendisse eu elit vel odio tristique efficitur.";
      //let receivedString = 'some string to compress, it works better with longer things'.repeat ( 10 );
      console.log("/compress received string",receivedString);
      //console.log("the length of the received string=",receivedString.length);
      const buffer = new TextEncoder().encode(receivedString);
      const compress = huffy.compress;
      //console.log("the length of the compressed string=",compressed.length);
      const decompress = huffy.decompress;
      const compressed = compress(buffer);
      console.log(compressed.toString());
      const decompressed = decompress(compressed);
      console.log('Compression ratio:', compressed.length / buffer.length);
      setTimeout(() => {
        res.status(200).json({ parsedData: "Compressed data" });
        console.log('Compression route hit');
      }, 2000);
    })
    .catch((error) => {
      console.error('Error importing huffy:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

router.get('/download', (req, res) => {
  // Implement logic to serve the compressed media for download
});

module.exports = router;
