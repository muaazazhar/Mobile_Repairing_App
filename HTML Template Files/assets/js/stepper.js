document.addEventListener("DOMContentLoaded", function () {
  const brand_stepper = document.querySelector(".brand-stepper");
  const model_stepper = document.querySelector(".model-stepper");
  const breakdown_stepper = document.querySelector(".breakdown-stepper");
  const brand_stepper_content = `
        <div class="stepper-wrapper">
        <div class="stepper-item active completed">
            <div class="step-counter">1</div>
            <div class="step-name">Brand</div>
        </div>
        <div class="stepper-item ">
            <div class="step-counter">2</div>
            <div class="step-name">Model</div>
        </div>
        <div class="stepper-item ">
            <div class="step-counter">3</div>
            <div class="step-name">Breakdown</div>
        </div>
        </div>
   `;
  const breakdown_stepper_content = `
        <div class="stepper-wrapper">
        <a href="javascript:history.go(-2)" class="stepper-item completed" style="text-decoration: none;">
            <div class="step-counter">✔</div>
            <div class="step-name">Brand</div>
        </a>
        <a href="javascript:history.back()" class="stepper-item completed" style="text-decoration: none;">
            <div class="step-counter ">✔</div>
            <div class="step-name">Model</div>
        </a>
        <div class="stepper-item active completed">
            <div class="step-counter">3</div>
            <div class="step-name">Breakdown</div>
        </div>
        </div>
   `;
  const model_stepper_content = `
        <div class="stepper-wrapper">
        <a href="javascript:history.back()" class="stepper-item completed" style="text-decoration: none;">
            <div class="step-counter">✔</div>
            <div class="step-name">Brand</div>
        </a>
        <div class="stepper-item active completed">
            <div class="step-counter ">2</div>
            <div class="step-name">Model</div>
        </div>
        <div class="stepper-item ">
            <div class="step-counter">3</div>
            <div class="step-name">Breakdown</div>
        </div>
        </div>
   `;
  const stepper = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .stepper-wrapper {
                font-family: Arial;
                margin: 100px 0;
                display: flex;
                justify-content: space-between;
                margin-bottom: 20px;
            }
    
            .stepper-item {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                flex: 1;
                font-size: large;
                font-weight: 500;
    
                @media (max-width: 768px) {
                    font-size: 12px;
                }
            }
    
            .stepper-item::before {
                position: absolute;
                content: "";
                border-bottom: 2px solid #ccc;
                width: 100%;
                top: 20px;
                left: -50%;
                z-index: 2;
            }
    
            .stepper-item::after {
                position: absolute;
                content: "";
                border-bottom: 2px solid #ccc;
                width: 100%;
                top: 20px;
                left: 50%;
                z-index: 2;
            }
    
            .stepper-item .step-counter {
                position: relative;
                z-index: 5;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #ccc;
                margin-bottom: 6px;
            }
    
            .stepper-item.active .step-counter {
                font-weight: bold;
                background-color: #f2b705;
            }
    
            .stepper-item.completed::after {
                position: absolute;
                content: "";
                border-bottom: 2px solid #f2b705;
                width: 100%;
                top: 20px;
                left: 50%;
                z-index: 3;
            }
    
            .stepper-item.completed .step-counter {
                background-color: #f2b705;
            }
    
            .stepper-item:first-child::before {
                content: none;
            }
    
            .stepper-item:last-child::after {
                content: none;
            }
        </style>
        </style>
    </head>
    
    <body>
        ${
          brand_stepper
            ? brand_stepper_content
            : model_stepper
            ? model_stepper_content
            : breakdown_stepper_content
        }
    </body>
    
    </html>
    `;

  if (brand_stepper) brand_stepper.innerHTML = stepper;
  if (model_stepper) model_stepper.innerHTML = stepper;
  if (breakdown_stepper) breakdown_stepper.innerHTML = stepper;
});
