export default class Media {
    constructor() {
        this.handler();
        this.events();
    }

    handler() {
        if ($(window).width() <= 991) {
            $('[data-desktop="header-nav"]').find($('[data-move="header-nav"]')).appendTo('[data-mobile="header-nav"]');
            $('[data-desktop="header-search"]').find($('[data-move="header-search"]')).appendTo('[data-mobile="header-mobile"]');
        }
        else {
          $('[data-mobile="header-nav"]').find($('[data-move="header-nav"]')).appendTo('[data-desktop="header-nav"]');
          $('[data-mobile="header-mobile"]').find($('[data-move="header-search"]')).appendTo('[data-desktop="header-search"]');
        }

        if ($(window).width() <= 575) {
            $('[data-desktop="header-blind"]').find($('[data-move="blind"]')).appendTo('[data-mobile="header-blind"]');
        }
        else {
          $('[data-mobile="header-blind"]').find($('[data-move="blind"]')).appendTo('[data-desktop="header-blind"]');
        }
    }

    events() {
        const self = this;

        $(window).on('resize', function () {
            self.handler();
        });
    }
}
