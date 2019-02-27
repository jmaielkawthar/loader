$(function () {
  'use strict';

  var console = window.console || { log: function () {} };
  var URL = window.URL || window.webkitURL;
  var $image = $('#image');
  var $download = $('#download');
  var $dataX = $('#dataX');
  var $dataY = $('#dataY');
  var $dataHeight = $('#dataHeight');
  var $dataWidth = $('#dataWidth');
  var $dataRotate = $('#dataRotate');
  var $dataScaleX = $('#dataScaleX');
  var $dataScaleY = $('#dataScaleY');

    //var minCroppedWidth = 96;
    //var minCroppedHeight = 80;
    //var maxCroppedWidth = 96;
    //var maxCroppedHeight = 80;
    //var options = {
    //    aspectRatio: 16 / 9,
   
    //  preview: '.img-preview',
     
    //  cropBoxResizable: false,
    //  dragMode: 'move',
    //  center: true,
    //      data: {
    //      width: (minCroppedWidth + maxCroppedWidth) / 2,
    //      height: (minCroppedHeight + maxCroppedHeight) / 2,
    //  },
    //  crop: function (event) {
    //      var width = event.detail.width;
    //      var height = event.detail.height;

    //      if (
    //          width < minCroppedWidth
    //          || height < minCroppedHeight
    //          || width > maxCroppedWidth
    //          || height > maxCroppedHeight
    //      ) {
    //          cropper.setData({
    //              width: Math.max(minCroppedWidth, Math.min(maxCroppedWidth, width)),
    //              height: Math.max(minCroppedHeight, Math.min(maxCroppedHeight, height)),
    //          });
    //      }

    //      data.textContent = JSON.stringify(cropper.getData(true));
    //  },
    var options = {
    aspectRatio: 121 / 100,
        preview: '.img-preview',
      
 
    center: true,
      
    crop: function (e) {
      $dataX.val(Math.round(e.detail.x));
      $dataY.val(Math.round(e.detail.y));
      $dataHeight.val(Math.round(e.detail.height));
      $dataWidth.val(Math.round(e.detail.width));
      $dataRotate.val(e.detail.rotate);
      $dataScaleX.val(e.detail.scaleX);
      $dataScaleY.val(e.detail.scaleY);
      }
     
  };
  var originalImageURL = $image.attr('src');
  var uploadedImageName = 'cropped.jpg';
  var uploadedImageType = 'image/jpeg';
  var uploadedImageURL;

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Cropper
  $image.on({
    ready: function (e) {
      console.log(e.type);
    },
    cropstart: function (e) {
      console.log(e.type, e.detail.action);
    },
    cropmove: function (e) {
      console.log(e.type, e.detail.action);
    },
    cropend: function (e) {
      console.log(e.type, e.detail.action);
    },
    crop: function (e) {
      console.log(e.type);
    },
    zoom: function (e) {
      console.log(e.type, e.detail.ratio);
    }
  }).cropper(options);

  // Buttons
  if (!$.isFunction(document.createElement('canvas').getContext)) {
    $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
  }

  if (typeof document.createElement('cropper').style.transition === 'undefined') {
    $('button[data-method="rotate"]').prop('disabled', true);
    $('button[data-method="scale"]').prop('disabled', true);
  }

   //Download
  if (typeof $download[0].download === 'undefined') {
    $download.addClass('disabled');
  }

  // Options
  //$('.docs-toggles').on('change', 'input', function () {
  //  var $this = $(this);
  //  var name = $this.attr('name');
  //  var type = $this.prop('type');
  //  var cropBoxData;
  //  var canvasData;

  //  if (!$image.data('cropper')) {
  //    return;
  //  }

  //  if (type === 'checkbox') {
  //    options[name] = $this.prop('checked');
  //    cropBoxData = $image.cropper('getCropBoxData');
  //    canvasData = $image.cropper('getCanvasData');

  //    options.ready = function () {
  //      $image.cropper('setCropBoxData', cropBoxData);
  //      $image.cropper('setCanvasData', canvasData);
  //    };
  //  } else if (type === 'radio') {
  //    options[name] = $this.val();
  //  }

  //  $image.cropper('destroy').cropper(options);
  //});

  // Methods
  $('.docs-buttons').on('click', '[data-method]', function () {
      var $this = $(this);
      console.log('this : ', $this);
      var data = $this.data();
      console.log('data ;', data);
      var cropper = $image.data('cropper');
      console.log('cropper', cropper);
      var cropped;
      console.log('cropped', cropped);
      var $target;
      console.log('target', $target);
      var result;
      console.log('result', result);

    if ($this.prop('disabled') || $this.hasClass('disabled')) {
      return;
    }

    if (cropper && data.method) {
      data = $.extend({}, data); // Clone a new one

      if (typeof data.target !== 'undefined') {
        $target = $(data.target);

        if (typeof data.option === 'undefined') {
          try {
            data.option = JSON.parse($target.val());
          } catch (e) {
            console.log(e.message);
          }
        }
      }

      cropped = cropper.cropped;

      switch (data.method) {
        case 'rotate':
          if (cropped && options.viewMode > 0) {
              $image.cropper(options);
          }
              $image.cropper(data.method, data.option, data.secondOption);
          break;

        case 'getCroppedCanvas':
          

              break;

          case 'reset':
             $image.cropper('destroy').cropper(options);
              break;

          case 'zoom':
              $image.cropper(data.method, data.option, data.secondOption);
              break; 
      }

      //result = $image.cropper(data.method, data.option, data.secondOption);

      switch (data.method) {
        case 'rotate':
          if (cropped && options.viewMode > 0) {
            $image.cropper('crop');
          }

          break;
          case 'move':
           {
                  $image.cropper('move');
               
              }

              break;
        case 'scaleX':
        case 'scaleY':
          $(this).data('option', -data.option);
          break;

          case 'getCroppedCanvas':
              result = $image.cropper("getCroppedCanvas");
          if (result) {
            // Bootstrap's Modal
              $('#result').html(result);

            if (!$download.hasClass('disabled')) {
              download.download = uploadedImageName;
              $download.attr('href', result.toDataURL(uploadedImageType));
            }
          }

          break;

        case 'destroy':
          if (uploadedImageURL) {
            URL.revokeObjectURL(uploadedImageURL);
            uploadedImageURL = '';
            $image.attr('src', originalImageURL);
          }

          break;
      }

      if ($.isPlainObject(result) && $target) {
        try {
          $target.val(JSON.stringify(result));
        } catch (e) {
          console.log(e.message);
        }
      }
    }
  });

  // Keyboard
  //$(document.body).on('keydown', function (e) {
  //  if (e.target !== this || !$image.data('cropper') || this.scrollTop > 300) {
  //    return;
  //  }

  //  switch (e.which) {
  //    case 37:
  //      e.preventDefault();
  //      $image.cropper('move', -1, 0);
  //      break;

  //    case 38:
  //      e.preventDefault();
  //      $image.cropper('move', 0, -1);
  //      break;

  //    case 39:
  //      e.preventDefault();
  //      $image.cropper('move', 1, 0);
  //      break;

  //    case 40:
  //      e.preventDefault();
  //      $image.cropper('move', 0, 1);
  //      break;
  //  }
  //});

  // Import image
  var $inputImage = $('#inputImage');

  if (URL) {
    $inputImage.change(function () {
      var files = this.files;
      var file;

      if (!$image.data('cropper')) {
        return;
      }

      if (files && files.length) {
        file = files[0];

        if (/^image\/\w+$/.test(file.type)) {
          uploadedImageName = file.name;
          uploadedImageType = file.type;

          if (uploadedImageURL) {
            URL.revokeObjectURL(uploadedImageURL);
          }

          uploadedImageURL = URL.createObjectURL(file);
          $image.cropper('destroy').attr('src', uploadedImageURL).cropper(options);
          $inputImage.val('');
        } else {
          window.alert('Please choose an image file.');
        }
      }
    });
  } else {
    $inputImage.prop('disabled', true).parent().addClass('disabled');
  }
});

