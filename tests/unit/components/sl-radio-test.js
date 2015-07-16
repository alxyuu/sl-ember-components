import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-radio', 'Unit | Component | sl radio', {
    unit: true
});

test( 'Disabled state applies disabled class, and attribute to input', function( assert ) {
    this.subject({ disabled: true });

    assert.ok(
        this.$( 'input' ).prop( 'disabled' ),
        'has attribute "disabled"'
    );

    assert.ok(
        this.$().hasClass( 'disabled' ),
        'has class "disabled"'
    );
});

test( 'Inline property sets relevant class', function( assert ) {
    this.subject({ inline: true });

    assert.ok(
        this.$().hasClass( 'radio-inline' ),
        'has class "radio-inline"'
    );
});
