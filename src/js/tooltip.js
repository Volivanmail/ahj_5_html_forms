export class Popover {
  constructor(element) {
    this.element = element;
    this._message = [
      "Здесь могла бы быть ваша реклама!",
      "Улыбочку!",
      "Завтра у вас будет удачный день!",
      "Минус 50 000 рублей на вашей карте!",
      "Попробуй еще раз!",
    ];

    this.showTooltip = this.showTooltip.bind(this);
    this.closeTooltip = this.closeTooltip.bind(this);
    this.showPopover = this.showPopover.bind(this);

    this.element.addEventListener("mouseover", this.showTooltip);
    this.element.addEventListener("mouseout", this.closeTooltip);
    this.element.addEventListener("click", this.showPopover);
  }

  showPopover(e) {
    e.preventDefault();
    const delElement = document.querySelector(".popover");
    if (delElement) {
      delElement.remove();
    }
    const popoverElement = document.createElement("DIV");
    popoverElement.classList.add("popover");
    const popoverTitle = document.createElement("h4");
    const popoverMessage = document.createElement("div");
    popoverElement.appendChild(popoverTitle);
    popoverElement.appendChild(popoverMessage);
    popoverTitle.classList.add("popover-title");

    const id = Math.round(Math.random() * (this._message.length - 1));
    console.log(id);
    popoverMessage.textContent = this._message[id];
    popoverTitle.textContent = `Message №${id + 1}`;

    document.body.appendChild(popoverElement);

    const { left, top } = this.element.getBoundingClientRect();
    popoverElement.style.left = `${
      left + this.element.offsetWidth / 2 - popoverElement.offsetWidth / 2
    }px`;
    popoverElement.style.top = `${top - popoverElement.offsetHeight - 10}px`;
  }

  showTooltip() {
    const tooltipElement = document.createElement("DIV");

    tooltipElement.classList.add("tooltip");
    tooltipElement.textContent = "Кликни и кое-что узнаешь!";

    document.body.appendChild(tooltipElement);

    const { left, bottom } = this.element.getBoundingClientRect();

    tooltipElement.style.left = `${
      left + this.element.offsetWidth / 2 - tooltipElement.offsetWidth / 2
    }px`;
    tooltipElement.style.top = `${bottom + 5}px`;
  }

  closeTooltip() {
    const tooltiprElement = document.querySelector(".tooltip");
    if (tooltiprElement) {
      tooltiprElement.remove();
    }

    const delElement = document.querySelector(".popover");
    if (delElement) {
      delElement.remove();
    }
  }
}
