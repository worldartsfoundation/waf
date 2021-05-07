from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import StreamField
from wagtail.core.fields import RichTextField
from wagtail.embeds.blocks import EmbedBlock
from wagtail.core import blocks
from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.images.blocks import ImageChooserBlock
from app.page_components.person_block import person_block
from app.page_components.text_with_media_block import text_with_media_block


class HomePage(Page):
    body = StreamField(
        [
            ("heading", blocks.CharBlock(form_classname="full title")),
            ("paragraph", blocks.RichTextBlock()),
            ("image", ImageChooserBlock()),
            ("person", person_block.Person()),
            ("text_with_media", text_with_media_block.TextWithMedia()),
        ]
    )

    desc = RichTextField(blank=True)
    bio = StreamField(
        [
            (
                "lockup",
                blocks.StreamBlock(
                    [
                        ("headline", blocks.TextBlock()),
                        ("image", ImageChooserBlock()),
                    ],
                    icon="cogs",
                ),
            ),
            (
                "carousel",
                blocks.StreamBlock(
                    [
                        ("image", ImageChooserBlock()),
                        (
                            "quotation",
                            blocks.StructBlock(
                                [
                                    ("text", blocks.TextBlock()),
                                    ("author", blocks.CharBlock()),
                                ]
                            ),
                        ),
                        ("video", EmbedBlock()),
                    ],
                    icon="cogs",
                ),
            ),
        ],
        null=True,
    )

    content_panels = Page.content_panels + [
        StreamFieldPanel("body"),
        FieldPanel("desc", classname="full"),
        StreamFieldPanel("bio"),
    ]
