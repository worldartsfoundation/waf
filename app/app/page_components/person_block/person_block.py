"""Contains the Person."""

from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock


class Person(blocks.StructBlock):
    first_name = blocks.CharBlock()
    surname = blocks.CharBlock()
    photo = ImageChooserBlock(required=False)
    biography = blocks.RichTextBlock()

    class Meta:
        icon = "user"
        label = "Person"
        template = "person_block/person_block.html"
