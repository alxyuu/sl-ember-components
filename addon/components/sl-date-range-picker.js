import Ember from 'ember';
import ComponentInputId from '../mixins/sl-component-input-id';
import layout from '../templates/components/sl-date-range-picker';

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-component-input-id
 */
export default Ember.Component.extend( ComponentInputId, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNames: [
        'sl-date-range-picker'
    ],

    /** @type {Object} */
    layout,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The value for the endDate input
     *
     * @type {?String}
     */
    endDateValue: null,

    /**
     * The string format for date values
     *
     * @type {String}
     */
    format: 'mm/dd/yyyy',

    /**
     * The last valid date for the date range
     *
     * @type {?Date|String}
     */
    maxDate: null,

    /**
     * The earliest date selectable in the range
     *
     * @type {?Date|String}
     */
    minDate: null,

    /**
     * The value for the startDate input
     *
     * @type {?String}
     */
    startDateValue: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Set up a transition that moves focus to the endDate input when the
     * startDate input is changed
     *
     * @function
     * @returns {undefined}
     */
    setupFocusTransition: Ember.on(
        'didInsertElement',
        function() {
            this.set( 'startDateInput', this.$( '.sl-daterange-start-date input' ) );
            this.set( 'endDateInput', this.$( '.sl-daterange-end-date input' ) );
            this.get( 'startDateInput' ).on( 'changeDate', this, this.changeDateHandler );
        }
    ),

    /**
     * Remove events
     *
     * @function
     * @returns {undefined}
     */
    unregisterEvents: Ember.on(
        'willClearRender',
        function() {
            this.get( 'startDateInput' ).off( 'changeDate', this.changeDateHandler );
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Callback for bootstrap datepicker changeDate event
     *
     * @function
     * @param {Event} event - A standard event object
     * @returns {undefined}
     */
    changeDateHandler: function( ev ) {
        const component = ev.data;

        if ( component.get( 'startDateInput' ).get( 0 ) === ev.target ) {
            component.get( 'endDateInput' ).trigger( 'focus' );
        }
    },

    /**
     * The earliest selectable endDate, based on minDate and
     * current startDateValue
     *
     * @function
     * @returns {?Date|String} Defaults to null
     */
    earliestEndDate: Ember.computed(
        'minDate',
        'startDateValue',
        function() {
            const minDate = this.get( 'minDate' );
            const startDateValue = this.get( 'startDateValue' );

            if ( startDateValue ) {
                return startDateValue;
            }

            if ( minDate ) {
                return minDate;
            }

            return null;
        }
    ),

    /**
     * The latest selectable startDate, based on maxDate and
     * current endDateValue
     *
     * @function
     * @returns {Date|String} Defaults to null
     */
    latestStartDate: Ember.computed(
        'endDateValue',
        'maxDate',
        function() {
            const endDateValue = this.get( 'endDateValue' );
            const maxDate = this.get( 'maxDate' );

            if ( endDateValue ) {
                return endDateValue;
            }

            if ( maxDate ) {
                return maxDate;
            }

            return null;
        }
    )

});
