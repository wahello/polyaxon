{{- /*
secrets config
*/}}
{{- define "config.envs" -}}
- name: POLYAXON_K8S_NODE_NAME
  valueFrom:
    fieldRef:
      fieldPath: spec.nodeName
- name: POLYAXON_RABBITMQ_PASSWORD
  valueFrom:
    secretKeyRef:
      name: {{ template "rabbitmq.fullname" . }}
      key: rabbitmq-password
{{- if .Values.redis.usePassword }}
- name: POLYAXON_REDIS_PASSWORD
  valueFrom:
    secretKeyRef:
      name: {{ template "redis.fullname" . }}
      key: redis-password
{{- end }}
{{- if (index .Values "docker-registry").auth.password }}
- name: POLYAXON_REGISTRY_USER
  valueFrom:
    secretKeyRef:
      name: {{ template "polyaxon.fullname" . }}-registry-secret
      key: registry-user
- name: POLYAXON_REGISTRY_PASSWORD
  valueFrom:
    secretKeyRef:
      name: {{ template "polyaxon.fullname" . }}-registry-secret
      key: registry-password
{{- end }}
- name: POLYAXON_DB_PASSWORD
  valueFrom:
    secretKeyRef:
{{- if .Values.postgresql.install }}
      name: {{ template "postgresql.fullname" . }}
{{- else }}
      name: {{ template "polyaxon.fullname" . }}-postgres-secret
{{- end }}
      key: postgres-password
{{- end -}}