import $ from 'jquery'
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(listOfItems, waypointOffset) {
    this.itemsToReveal = listOfItems;
    this.hideItemInitially();
    this.createWaypoints(waypointOffset);
  }

  hideItemInitially() {
    this.itemsToReveal.addClass('hide-item');
  }

  createWaypoints(waypointOffset) {
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        offset: waypointOffset,
        handler: function() {
          $(currentItem).addClass('hide-item--is-visible');
        }
      });
    });
  }
}

export default RevealOnScroll;
