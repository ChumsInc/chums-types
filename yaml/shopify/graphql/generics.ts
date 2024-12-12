openapi: 3.0.3
info:
  title: Chums Types
  version: n/a
  x-comment: >-
    Generated by core-types-json-schema
    (https://github.com/grantila/core-types-json-schema) on behalf of typeconv
    (https://github.com/grantila/typeconv)
paths: {}
components:
  schemas:
    Count:
      properties:
        count:
          title: Count.count
          type: number
        precision:
          enum:
            - AT_LEAST
            - EXACT
          title: Count.precision
          type: string
      required:
        - count
        - precision
      additionalProperties: false
      title: Count
      type: object
    Weight:
      properties:
        unit:
          title: Weight.unit
          type: string
        value:
          title: Weight.value
          type: number
      required:
        - unit
        - value
      additionalProperties: false
      title: Weight
      type: object
    UserError:
      properties:
        code:
          title: UserError.code
          type: string
        field:
          items:
            title: UserError.field.[]
            type: string
          title: UserError.field
          type: array
        message:
          title: UserError.message
          type: string
      required:
        - code
        - field
        - message
      additionalProperties: false
      title: UserError
      type: object
