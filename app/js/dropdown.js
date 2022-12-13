export default class Dropdown {
  dropdown = '[data-dropdown]';
  dropdownList = '[data-dropdown-list]';

  constructor() {
    this.events();
  }

  events() {
    let self = this;
    $(this.dropdown).on('click', function () {
      if (!$(this).hasClass('open')) {
        self.closeAll();
        self.openDropdown($(this));
      } else {
        self.closeDropdown($(this));
      }
    })
    $(document).on('click', function (e) {
      if ($(e.target).closest(self.dropdown).length == 0) {
        self.closeAll();
      }
    })
  }

  closeAll() {
    let self = this;
    $(this.dropdown).each(function (i, item) {
      self.closeDropdown($(item));
    })
  }

  openDropdown($dropdown) {
    $dropdown.addClass('open');
  }

  closeDropdown($dropdown) {
    $dropdown.removeClass('open');
  }
}
