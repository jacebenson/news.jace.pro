import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'

const ItemForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.item?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>
        <TextField
          name="url"
          defaultValue={props.item?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="url" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.item?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="authors"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Authors
        </Label>
        <TextAreaField
          name="authors"
          defaultValue={JSON.stringify(props.item?.authors)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          dataType="Json"
        />
        <FieldError name="authors" className="rw-field-error" />

        <Label
          name="source"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Source
        </Label>
        <TextField
          name="source"
          defaultValue={props.item?.source}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="source" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>
        <TextField
          name="type"
          defaultValue={props.item?.type}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="type" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ItemForm
