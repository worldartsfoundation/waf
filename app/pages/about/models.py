from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import StreamField
from wagtail.core.fields import RichTextField
from wagtail.embeds.blocks import EmbedBlock
from wagtail.core import blocks
from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.images.blocks import ImageChooserBlock
from app.page_components.person_block import person_block


class AboutPage(Page):
    body = StreamField(
        [
            ("heading", blocks.CharBlock(form_classname="full title")),
            ("paragraph", blocks.RichTextBlock()),
            ("image", ImageChooserBlock()),
            ("person", person_block.Person()),
        ]
    )

    content_panels = Page.content_panels + [
        StreamFieldPanel("body"),
    ]
