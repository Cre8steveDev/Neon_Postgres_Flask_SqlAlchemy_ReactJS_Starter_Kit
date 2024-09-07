"""tweak amount_earned

Revision ID: 34a5c01eb1a5
Revises: c227d818156c
Create Date: 2024-09-07 21:05:14.140530

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '34a5c01eb1a5'
down_revision = 'c227d818156c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('amount_earned',
               existing_type=sa.NUMERIC(precision=10, scale=2),
               type_=sa.Float(),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('amount_earned',
               existing_type=sa.Float(),
               type_=sa.NUMERIC(precision=10, scale=2),
               existing_nullable=True)

    # ### end Alembic commands ###
