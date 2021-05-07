"""Contains the TextWithMedia."""

from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock


class TextWithMedia(blocks.StructBlock):
    text = blocks.RichTextBlock()
    media = ImageChooserBlock(required=False)

    class Meta:
        icon = "image"
        label = "Text with media"
        template = "text_with_media_block/text_with_media_block.html"
