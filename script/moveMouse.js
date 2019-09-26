$(function() {
    document.getElementById('blockGreen').addEventListener('mousedown', (e) => {
        var blockGreen = document.getElementById('blockGreen')
        let shiftX, shiftY;
        // shiftX = e.clientX - block.getBoundingClientRect().left; - получить комплексную позицию прямоугольной области блока
        shiftX = e.clientX - blockGreen.getBoundingClientRect().left;
        shiftY = e.clientY - blockGreen.getBoundingClientRect().top;
        console.log(shiftX + ' ' + shiftY);
        blockGreen.style.position = 'absolute';
        blockGreen.style.zIndex = '1000';
        // document.body.append(block);  // поставить блок под мышиный курсор

        function moveAt(pageX, pageY) { // функция смещения блока в очередную позицию мышинного курсора
            blockGreen.style.left = pageX - shiftX + 'px';
            blockGreen.style.top = pageY - shiftY + 'px';
        }

        moveAt(e.pageX, e.pageY);

        function mouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }
        document.addEventListener('mousemove', mouseMove);

        blockGreen.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', mouseMove);
            blockGreen.onmouseup = null;
        });

    });
    blockGreen.ondragstart = (e) => { // при начале перетаскивания блока отключить стандартный обработчик браузера
        e.preventDefault();
    };

    document.getElementById('blockRed').addEventListener('mousedown', (e) => {
        var blockRed = document.getElementById('blockRed');
        let shiftX, shiftY;

        shiftX = e.clientX - blockRed.getBoundingClientRect().left;
        shiftY = e.clientY - blockRed.getBoundingClientRect().top;
        blockRed.style.zIndex = '1000';
        console.log(shiftX + ' ' + shiftY);

        function moveAt(pageX, pageY) {
            blockRed.style.left = pageX - shiftX + 'px';
            blockRed.style.top = pageY - shiftY + 'px';
        }

        moveAt(e.pageX, e.pageY);

        function mouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }
        document.addEventListener('mousemove', mouseMove);

        blockRed.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', mouseMove);
            blockRed.onmouseup = null;
        });

        blockRed.ondragstart = (e) => {
            e.preventDefault();
        };
    });

    document.getElementById('blockBlue').addEventListener('mousedown', (e) => {
        var blockBlue = document.getElementById('blockBlue');
        let shiftX, shiftY;

        shiftX = e.clientX - blockBlue.getBoundingClientRect().left;
        shiftY = e.clientY - blockBlue.getBoundingClientRect().top;
        blockBlue.style.zIndex = '1000';

        console.log(shiftX + ' ' + shiftY);

        function moveAt(pageX, pageY) {
            blockBlue.style.left = pageX - shiftX + 'px';
            blockBlue.style.top = pageY - shiftY + 'px';
        }

        function mouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }

        document.addEventListener('mousemove', mouseMove);

        blockBlue.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', mouseMove);
            blockBlue.onmouseup = null;
        });

        blockBlue.ondragstart = (e) => {
            e.preventDefault();
        };
    });
    document.getElementById('blockOrange').addEventListener('mousedown', (e) => {
        var blockOrange = document.getElementById('blockOrange');
        let shiftX, shiftY;

        shiftX = e.clientX - blockOrange.getBoundingClientRect().left;
        shiftY = e.clientY - blockOrange.getBoundingClientRect().top;
        blockOrange.style.zIndex = '1001';
        console.log(shiftX + ' ' + shiftY);

        function mouseMove(e) {
            blockOrange.style.left = e.pageX - shiftX + 'px';
            blockOrange.style.top = e.pageY - shiftY + 'px';
        }

        document.addEventListener('mousemove', mouseMove);
        blockOrange.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', mouseMove);
            blockOrange.onmouseup = null;
        });
        blockOrange.ondragstart = (e) => {
            e.preventDefault();
        }
    });
    $('#blockBrown').mousedown((e) => {
        let blockBrown = $('#blockBrown');
        let shiftX, shiftY;

        shiftX =  e.clientX - blockBrown.offset().left;
        shiftY =  e.clientY - blockBrown.offset().top;
        blockBrown.css('zIndex', '1002')

        console.log(shiftX + ' ' + shiftY);

        function mouseMove(e) {
            var left = e.pageX - shiftX;
            var top = e.pageY - shiftY;
            blockBrown.css('left', left + 'px').css('top', top + 'px');
        }
        $(document).mousemove(mouseMove);

        blockBrown.mouseup(function() {
            $(document).unbind('mousemove', mouseMove);
        });
        blockBrown.on('dragstart', function(e) {
            e.preventDefault();
        })
    });
    $('#blockYellow').mousedown((e) => {
        const blockYellow = $('#blockYellow');
        let shiftX, shiftY;

        shiftX = e.clientX - blockYellow.offset().left;
        shiftY = e.clientY - blockYellow.offset().top;
        blockYellow.css('zIndex', '1003')
        console.log(shiftX + ' ' + shiftY);

        function mouseMove(e) {
            var left = e.pageX - shiftX;
            var top = e.pageY - shiftY;

            blockYellow.css('left', left + 'px').css('top', top + 'px');
        }
        $(document).mousemove(mouseMove);

        blockYellow.mouseup(() => {
            $(document).unbind('mousemove', mouseMove);
        });
        blockYellow.on('dragstart', (e) => {
            e.preventDefault();
        });
    });
    document.body.addEventListener('click', function(e) {
        var target = e.target;
        var div = 'block' + target.id.substr(5);
        if (target.tagName == 'DIV') {
            clearBlock();
            console.log(div);
            target.style.backgroundColor = 'violet';
        }

        function clearBlock() {
            // document.getElementById('blockGreen').style.backgroundColor = 'green'
            // document.getElementById('blockRed').style.backgroundColor = 'red'
            //
            // document.getElementById('blockBlue').style.backgroundColor = 'blue'
            //
            // document.getElementById('blockOrange').style.backgroundColor = 'orange'
            //
            // document.getElementById('blockBrown').style.backgroundColor = 'brown'
            //
            // document.getElementById('blockYellow').style.backgroundColor = 'yellow'
            var color = ['green', 'red', 'blue', 'orange', 'brown', 'yellow'];
            var divBlock = document.getElementsByTagName('div');
            for (var i = 0; i < divBlock.length; i++) {
                divBlock[i].style.backgroundColor = color[i];
            }
        }
    });
});
