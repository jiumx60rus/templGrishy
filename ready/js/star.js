(function() {
    var canvas = document.getElementById('star');
    var ctx = canvas.getContext("2d");

    canvas.width = $(window).width();
    canvas.height = $(window).height() / 1.5;

    var img1 = new Image();
    img1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAQ4CAMAAADfDTFxAAAApVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+4/eNVAAAAN3RSTlMAOkAXIks1ASthTxIKVwWEH2Z6MiglG1svRJ0MSAeOf28OU5h3vsxyahCzo6mTiMSuudLY6+D0QsBeIgAAIJdJREFUeNrs3EtqAlEQBdCbRh4NGoMZSD40BhIzS0KS/e9NhzoQEbufv3O2UBSXgqoKAHArxuMAbPv+CDCw/1GAxSJsaNsAwPBKCQAAAAAAAADAZft6CwCwlw1EAAAAAACgnpG3WgBQ391PAAAAAADglMpTAIDaPgUwAAAAALCl7QLJZBIAKvrrXIOyVlSX47zPAgykMywDu8znAQAAAACAKmb3AeAApQSO9yKAAQ7SLAMA7GcEBs7b73Po1cNjuEI6BehZ04ReTaeBy7N8DQBQWyOAgRV797aSQBhGAXTbhUxiJIXIFGp2BqPopvd/tO4TLcz5nXHWeokN3/GAVpcBAEpbLQO0Tq2jDrCXcyPB/bZ4yb/M1gFgDzcCuN9GowAAAAAAx/MxCABQ2nQaAAAAAADotoFuM7CpsmwNDXt4DcBPld//AAAA0Hn1ZwA4HXeL0AnjcQBot6ez/FlVhX5z5xxgN6FKI658kd/i7T4AQGkXAhgAAAAAANpqPg+wTb0MQCO+bgMIYAAAAAAAAAB2u34OAFDaZBIAgA2PwwAApb0PU9BsHQDgd2ryAMA3e/e2kkAUhQF45RgKlgiKg5gIYQQZppXv/2rdRBcd0Atn2nvP973EvzZ7HT7tHekF4KeXq6BRs1kAwHf9fgAAAAAAAAAAAAAAAAAA2XivAgBo23gcABSieghSMRkGfLHZEMpW9SJLx5soz+Q1oBlD1R1kr7+MFExKDGCAC9hm+rDilLc0AhiA39UCGDhLtQ2ARPTUL3RHVQdAIg53AcUaPAVAVhb7gPwNruOEWyPPQFIW9wFd8CyASc3uMYAL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";

    var img2 = new Image();
    img2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAQ4CAMAAADfDTFxAAAApVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+4/eNVAAAANnRSTlMADglCIGcoFFJyLIBIGJgcfMTLWzi9YiTy49hXPAUCjTWEbd7Sre2knIlNEfh3sjLok7ippz6VD2oQAAAVaElEQVR42uzdMQ6CQBBA0SmwAWLoSEzYRipjKCj2/kfzBGrFKJv3LvHLHwAAQAuWfQ8AINlSnwEAJFvGMQD4pXXtAwBItlYBBoB0fS/AAAAAcKBSawAAnwkwALSglBIAAADAn9vujwAAkm1VgAEgXdd1AQAAAAAAAAAAAAAAAO9N0yUAgGTXKsAAkG4YBBgAAACONs9zAADfuQAAwNltNwEGAAAAAAAAAGjMi706SEEQiAIA+mlj6EJTNy4FqUWBgTD3P1o3aOUMNL13ibdtbQDV6ftLQAbTugan2JKAoUKvJGCymNIjOEXbChgqtCwCJotpGAIAAAAAAAAAAAAAAAAAAOCL43YNAKCwIwkYAIqb5zkAAAAAAAAAAAAAAAAA/lP3HgIAKKxLAgaA4pqmCQAAAAAAAAAAAACA37PvzwAACrsnAQNAceMoYAAAgA97d4yCMBAEUHQIpgiioNsoBDRJsaSwsNn7H83CE9gMLL53iV9+AAAAAACgG8e3BxGk2fdTAJgAQrJ7E2Dga13XAJJMkwADAAAAwJ+rtQQAkKw2AQaAdKUIMAAAAAAAAAAAAAAAQOR7XKYAAJI9mgADQLp5ngMAAAAAAAAAgF+M4xgAQLKlvQIASLacBRgAAAAAAMhU6zMAoG/D4RCduTYBBqB3Q7tFZ0oRYAB6N2xb8GHnjk0ACKEgCn41MD8QroIDI7PrvzS7EJWZJl60CwAAAAAAwI5qrQEALNZ9BwNwt1xK7Kd/AgzA1Q5cDgLA+XJrAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcKKUUgAA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";

    var img3 = new Image();
    img3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAQ4CAMAAADfDTFxAAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMAJVJzE5MK6q0yFg+NHzopN24bawU+LNfOmWf08MmJS+Da1MS2gF7lwVl7RPq9pqOeYoRzZ6kOAAARdElEQVR42uzVIREAIAwAwOExi7AM698NNAaH4P5LfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJyyagYA8FZ2CxgALgQMAD8YWwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwGKvjk0AhIEAAD4qJEUgpYP8/ruZCbSL8NwtcfzsWAIA2GtkngEAvBIwAFQwehcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIbO1OwCAvWamgAHgg4ABoIJrCQAAAAAAAAAAAAAAAAAAAAAAHvbq2AZgEAYAGBzQA8jULJ0r5f/funZjQwjZTxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANjIGONpAMBab5WAAWBCwABwgogQMAAAAAAAAAAAAAAAAAAAAADAX+/9agDAWneVgAFgQsAAcILMFDAAAAB87N0xioNQFIXh21gMFoqvHZsH00SEkbv/vSULCIaEEPL0+zbxd+cAAMDh9cMwBADwWX3mbwAAuwQYAI6gr7UGAAAAAAAAAAAAAAAAzRiXZQkA4LPGzDkAgF0CDPddav0L4My2ruuiHeO6rgHtu2QKMJzblvkfwCMCDAgwtG9wcQhnt5VSAgAAAAAAAAAAAAAAAAAAAAB4mzLPLc1KA8AxlEwBBoAHBBgAvsU0TfGqn5sAAJ6XmQEA7BNgAK7s2qERwCAQAMFPFBKJiUBRwPffW9IBKszA7DZx5n5RWruDdcYYAQAlU4ABYEKAAeAExloAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYSe39CQBgrZopwAAwIcAAcILrEwAAAAAAAAAA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";

    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 30);
            };
    })();

    var y1 = 0;
    var y2 = 0;
    var y3 = 0;

    function draw() {
        requestAnimationFrame(draw);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(img1, 0, y1, canvas.width, canvas.height);
        ctx.drawImage(img2, 0, y2, canvas.width, canvas.height);
        ctx.drawImage(img3, 0, y3, canvas.width, canvas.height);

        ctx.drawImage(img1, 0, y1 + canvas.height, canvas.width, canvas.height);
        ctx.drawImage(img2, 0, y2 + canvas.height, canvas.width, canvas.height);
        ctx.drawImage(img3, 0, y3 + canvas.height, canvas.width, canvas.height);

        y1 -= 0.04;
        y2 -= 1.3 * 0.04;
        y3 -= 1.8 * 0.04;

        if (y1 < -canvas.height) y1 = 0;
        if (y2 < -canvas.height) y2 = 0;
        if (y3 < -canvas.height) y3 = 0;
    }
    draw();
})();
